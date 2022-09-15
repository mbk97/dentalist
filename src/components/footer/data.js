import location from "../../assets/images/location.png";
import clock from "../../assets/images/clock.png";
import phone from "../../assets/images/phone.png";
import fb from "../../assets/images/fb.png";
import ig from "../../assets/images/ig.png";
import tw from "../../assets/images/tw.png";

const linksData = [
  {
    id: 1,
    text: "AboutUs",
  },
  {
    id: 2,
    text: "DentalServices",
  },
  {
    id: 3,
    text: "Dentist",
  },
  {
    id: 4,
    text: "Blog",
  },
  {
    id: 5,
    text: "FAQs",
  },
];

const footerContact = [
  {
    id: 1,
    img: phone,
    header: "Phone Number",
    text: "+088 123 654 987",
  },
  {
    id: 2,
    img: clock,
    header: "Open Hour",
    text: "09:00 AM - 18:00 PM",
  },
  {
    id: 3,
    img: location,
    header: "Clinic Address",
    text: "35 West Dental Street California 1004",
  },
];

const socialIcons = [
  {
    id: 1,
    img: fb,
  },
  {
    id: 2,
    img: tw,
  },
  {
    id: 3,
    img: ig,
  },
];

export { linksData, footerContact, socialIcons };
