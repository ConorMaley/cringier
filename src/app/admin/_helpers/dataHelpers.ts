export const mongooseDocsToJSON = (docs: any) => {
    return docs.map((doc: any) => {
        doc.toObject();
    });
}