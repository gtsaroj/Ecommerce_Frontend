import { Cloudinary } from "@cloudinary/url-gen";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import axios from "axios";

export const uploadOnCloudinary = async (image) => {
  new Cloudinary({
    cloud: {
      cloudName: "dhnvpzxt6",
      apiKey: "361221822466173",
      apiSecret: "lJQeWaa5ReqnV6XpcwTpynOcMuQ",
    },
  });
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "xmatoImage");
  data.append("cloud_name", "dhnvpzxt6");
  try {
    if (!image) return null;

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dhnvpzxt6/upload",
      data
    );
    console.log(response);
    const resData = await response.data;
    return resData.url;
  } catch (error) {
    //remove the locally saved file as failed to upload in cloudinary
    return console.log(error);
  }
};
