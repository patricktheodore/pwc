import axios from "axios";
// take form.value and pass it to formspree.
type FormValues = {
  name: string; // regular field, same as inferred type
  email: string; // union, more specific than inferred type (string)
  subject: string;
  message: string; // values that may be undefined cannot be inferred
  address: string;
  services: [];
};

export const formSubmit = (props: FormValues) => {
  axios({
    url: "https://formspree.io/f/xayvkapz",
    method: "post",
    headers: {
      Accept: "application/json",
    },
    data: {
      name: props.name,
      address: props.address,
      email: props.email,
      subject: `${props.name} - ${props.subject}`,
      services: props.services,
      message: props.message,
    },
  }).then((response) => {
    console.log(response);
    console.log(response.status);

    return response.status;
  });
};
