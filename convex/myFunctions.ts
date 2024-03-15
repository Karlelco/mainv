
import {  v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";


export const getUser = query({
args: {},
  handler: async (ctx) => {
    const user = await ctx.auth.getUserIdentity();
   if (!user) {
     return null;
   }
    return user;
  },
});

export const createUser = internalMutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    await ctx.db.insert("users", {
      name: identity?.name ?? "",
      email: identity?.email ?? "",
      phone: identity?.phoneNumber ?? ""
    });
  }
});

export const createOrder = mutation({
  args: {
    orderId: v.id("_orders"),
    customerName: v.string(),
    orderDate: v.string(),
    orderStatus: v.string(),
    orderTotal: v.string(),
    orderItems: v.array(
      v.object({
        productId: v.id("_products"),
        productName: v.string(),
        productPrice: v.number(),
        productQuantity: v.number(),
        productTotal: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    console.log(args),
      await ctx.db.insert("orders", {
        orderId: args.orderId,
        customerName: args.customerName,
        orderDate: args.orderDate,
        orderStatus: args.orderStatus,
        orderTotal: args.orderTotal,
        orderItems: args.orderItems,
      });
    console.log("Added new document with id:", args);
  },
});




export const createProduct = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    price: v.number(),
    quantity: v.number(),
    onSale: v.boolean(),
    id: v.string(),
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    console.log(args),
      await ctx.db.insert("products", {
        title: args.title,
        description: args.description,
        price: args.price,
        quantity: args.quantity,
        onSale: args.onSale,
        id: args.id,
        imageFile: args.storageId,
      });
    console.log("Added new document with id:", args);
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});


export const getProducts = query({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();
    return products;
  },
});

export const getProductsByEmail = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    const products = await ctx.db.query("products").filter((q) => q.eq("email", identity?.email)).collect();
    return products;
  },
});



export const registerVendor = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    storeName: v.string(),
    storeDescription: v.string(),
    storeAddress: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("vendors", { 
      name: args.name,
      email: args.email,
      phone: args.phone,
      storeName: args.storeName,
      storeDescription: args.storeDescription,
      storeAddress: args.storeAddress,
    });
    console.log("Added new vendor with id:", id);
  },
});

export const getVendor = query({
  args: {},
  handler: async (ctx) => {
    const vendor = await ctx.db.query("vendors").collect();
    if (!vendor) {
      console.log("No vendor found");
    }
    return vendor;
  },
});

export const getVendorByEmail = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    const vendor = await ctx.db
      .query("vendors")
      .withIndex("by_email")
      .filter((q) => q.eq("by_email", identity?.email))
      .collect();

    if (!vendor) {
      console.log("No vendor found with email:", identity?.email, vendor);
    }

    return vendor;
  },
});


export const notifyVendor = mutation({
  args: {
    orderId: v.id("_order"),
    vendorId: v.id("_vendors"),
    productId: v.id("_products"),
    productName: v.string(),
  },
  handler: async (ctx, args) => {
    console.log(args),
      await ctx.db.insert("order", {
        orderId: args.orderId,
        vendorId: args.vendorId,
        productId: args.productId,
        productName: args.productName,
      });
    console.log("Notified vendor with id:", args);
  }
});

  
