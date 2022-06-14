import React, { useState } from "react";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import {
  TextInput,
  Button,
  Box,
  Group,
  Textarea,
  Title,
  Select,
  MultiSelect,
  Text,
} from "@mantine/core";
import { contactStyles } from "../../styles/Contact";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
  name: string; // regular field, same as inferred type
  email: string; // union, more specific than inferred type (string)
  subject: string;
  message: string; // values that may be undefined cannot be inferred
  address: string;
  services: [];
}

const schema = z.object({
  name: z.string().min(2, { message: "A name should have at least 1 letter" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, {
    message: "Please select one. If you are unsure, select 'Unsure'",
  }),
  services: z.array(z.string()).min(1, {
    message: "Please select at least one. If you are unsure, select 'Unsure'",
  }),
  message: z
    .string()
    .min(2, { message: "Please provide details (minimum 2 words)" }),
});

export const ContactForm = () => {
  const [formState, setFormState] = useState(false);
  const { classes } = contactStyles();

  const form = useForm<FormValues>({
    schema: zodResolver(schema),
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      address: "",
      services: [],
    },
  });

  //   insert email package here
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    axios({
      url: "https://formspree.io/f/xayvkapz",
      method: "post",
      headers: {
        Accept: "application/json",
      },
      data: {
        name: form.values.name,
        address: form.values.address,
        email: form.values.email,
        subject: `${form.values.name} - ${form.values.subject}`,
        services: form.values.services,
        message: form.values.message,
      },
    })
      .then((response) => {
        toast.success(
          `Thanks ${
            form.values.name.split(" ")[0]
          }! We've received your enquiry. We will get back to you as soon as possible.`,
          {
            style: {
              fontFamily: "sans-serif",
            },
          }
        );
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          "Oops! Something went wrong, please try again later or call us directly.",
          {
            style: {
              fontFamily: "sans-serif",
            },
          }
        );
      }),
      form.reset();
    setFormState(true);
  };

  return (
    <Box className={classes.formCont}>
      <Title className={classes.formTitle} order={2}>
        Send an enquiry
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          disabled={formState}
          required
          label="Name"
          placeholder="Steve Smith"
          mt="sm"
          {...form.getInputProps("name")}
          onBlur={() => form.validateField("name")}
        />
        <TextInput
          disabled={formState}
          required
          label="Email"
          placeholder="example@mail.com"
          mt="sm"
          {...form.getInputProps("email")}
          onBlur={() => form.validateField("email")}
        />
        <TextInput
          disabled={formState}
          label="Address"
          placeholder="12 Placehold Lane, Narnia, 6000"
          mt="sm"
          {...form.getInputProps("address")}
        />
        <Select
          disabled={formState}
          aria-label="Subject select"
          data={["Residential", "Commercial", "Unsure"]}
          placeholder="Pick one"
          mt="sm"
          label="Job Type / Description"
          {...form.getInputProps("subject")}
          onBlur={() => form.validateField("subject")}
          required
        />
        <MultiSelect
          disabled={formState}
          aria-label="Services select"
          mt="sm"
          data={[
            "Interior Window Clean",
            "Exterior Window Clean",
            "Pressure Cleaning",
            "Solar Panel Clean",
            "Pool Fence Restoration",
            "Unsure",
          ]}
          placeholder="Pick all you like"
          label="Services you're interested in"
          {...form.getInputProps("services")}
          onBlur={() => form.validateField("services")}
          required
          clearButtonLabel="Clear selection"
          clearable
        />
        <Textarea
          disabled={formState}
          required
          label="Message"
          placeholder="Tell us how we can help."
          mt="sm"
          autosize
          minRows={4}
          {...form.getInputProps("message")}
          onBlur={() => form.validateField("message")}
        />
        <Group position="center" mt="xl">
          <Button
            disabled={formState}
            type="submit"
            className={classes.submitBtn}
          >
            Send
          </Button>
          <Button
            disabled={!formState}
            type="button"
            onClick={() => setFormState(false)}
            className={classes.resetBtn}
          >
            Reset Form
          </Button>
        </Group>
        <Toaster
          toastOptions={{
            success: {
              duration: 5000,
              position: "bottom-right",
              ariaProps: {
                role: "status",
                "aria-live": "polite",
              },
            },
          }}
        />
      </form>
    </Box>
  );
};
