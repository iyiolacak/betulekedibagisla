import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  plans: defineTable({
    userId: v.string(),
    idea: v.string(),
    targetUser: v.string(),
    plan: v.any(),
    version: v.number(),
  }),
  users: defineTable({
    userId: v.string(),
    credits: v.number(),
  }),
});
