import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth.userId;

      if (!clerkId) {
        return res.status(401).json({ message: "Unauthorized - Invalid Token" });
      }

      let user = await User.findOne({ clerkId });

      // If the user isn't in our DB yet (e.g. the Inngest sync webhook never
      // fired in local dev), create them on the fly from their Clerk profile.
      if (!user) {
        const clerkUser = await clerkClient.users.getUser(clerkId);

        const email = clerkUser.emailAddresses?.[0]?.emailAddress;
        const name =
          `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() ||
          email ||
          "User";

        user = await User.create({
          clerkId,
          email,
          name,
          profileImage: clerkUser.imageUrl || "",
        });

        await upsertStreamUser({
          id: user.clerkId.toString(),
          name: user.name,
          image: user.profileImage,
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
