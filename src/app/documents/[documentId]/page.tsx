const DocumentIdPage = async ({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) => {
  const { documentId } = await params;

  return <div>document id: {documentId}</div>;
};

export default DocumentIdPage;
