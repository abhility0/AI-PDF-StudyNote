import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const AddFileEntryToDb=mutation({
    args: {
        fileId:v.string(),
        storageId:v.string(),
        fileName:v.string(),
        createBy:v.string()
        },
        handler: async (ctx, args) =>{
            const result=await ctx.db.insert( 'pdfFiles',{
            fileId:args. fileId,
            fileName:args.fileName,
            storageld: args.storageId,
            createdBy:args.createdBy
            })
            return 'Inserted'
        }
    
})