import { mutation } from "./_generated/server";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: { userId: v.string() , email: v.string() , name: v.string() , username: v.string() , pfp: v.string()  },
  handler: async (ctx, args ) => {
    // Check if the user already exists
    const existingUser = await ctx.db.query("users").filter(q => q.eq(q.field("userId"), args.userId)).first();
    if (existingUser) {
      return; // User already exists, no need to insert
    }
    
    // Insert the new user
    await ctx.db.insert("users", args );
  },
});


export const getUserById = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);
    return user;
  },
});
// You can add other user-related routes here