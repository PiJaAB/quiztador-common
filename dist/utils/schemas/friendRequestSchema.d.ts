import { z } from 'zod';
declare const FriendRequestSchema: z.ZodObject<{
    status: z.ZodUnion<[z.ZodLiteral<"Rejected">, z.ZodLiteral<"Approved">, z.ZodLiteral<"Pending">]>;
    initiator: z.ZodString;
    friendRequestFor: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "Rejected" | "Pending" | "Approved";
    initiator: string;
    friendRequestFor: string;
}, {
    status: "Rejected" | "Pending" | "Approved";
    initiator: string;
    friendRequestFor: string;
}>;
export default FriendRequestSchema;
