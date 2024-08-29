const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL || "https://cloud.appwrite.io/v1"),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID || "66bcfde7001aec6bbafe"),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID || "66bd0010001ca4cb5a66"),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID || "66bd0087000f2b15f61b"),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID || "66bd02b70005da6c320c"),
}

export default conf