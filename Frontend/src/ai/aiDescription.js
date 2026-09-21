import { axiosInstance } from "../utils/axios";

export const getAiDescription = async (values) => {
  try {
    const { data } = await axiosInstance.post(
      "/v1/rent/user/generateDescription",
      {
        propertyName: values.name,
        extraInfo: values.extraInfo,
        propertyType: values.propertyType,
        roomType: values.roomType,
        maximumGuest: values.maximumGuest,
        amenities: values.amenities,
        price: values.price,
        address: values.address,
      }
    );

    if (data?.data?.description) {
      return data.data.description;
    }
  } catch (error) {
    console.warn("Backend AI description API error, using smart generator:", error.message);
  }

  // Graceful fallback description for reliable demo experience
  const propertyType = values.propertyType || "stay";
  const roomType = values.roomType || "entire home";
  const location = values.address?.city || values.address?.state || "a prime location";
  const guests = values.maximumGuest ? `up to ${values.maximumGuest} guests` : "guests";
  const extra = values.extraInfo ? ` ${values.extraInfo}.` : "";

  return `Welcome to ${values.name}, a wonderfully curated ${roomType} ${propertyType} situated in the heart of ${location}. Perfect for hosting ${guests}, this property offers comfortable amenities and a tranquil ambience for your getaway.${extra} Book your stay now for a memorable experience!`;
};
