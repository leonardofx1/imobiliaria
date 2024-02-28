import { AddImageForm } from "@/components/AddImageForm";

export interface IdType {
  params: { imagePropertyId: string };
}

const addImage = ({ params }: IdType) => {
  return (
    <>
      <AddImageForm params={params}/>
    </>
  );
};

export default addImage;
