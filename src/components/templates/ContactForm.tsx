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
} from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { contactStyles } from "../../styles/Contact";

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
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    form.validate();
    // upon success form submission -
    // form.reset();
    // otherwise throw error
  };

  return (
    <Box mx="auto" className={classes.formCont}>
      <Title className={classes.formTitle} order={2}>
        Send an enquiry
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          required
          label="Name"
          placeholder="Steve Smith"
          mt="sm"
          {...form.getInputProps("name")}
          onBlur={() => form.validateField("name")}
        />
        <TextInput
          required
          label="Email"
          placeholder="example@mail.com"
          mt="sm"
          {...form.getInputProps("email")}
          onBlur={() => form.validateField("email")}
        />
        <TextInput
          label="Address"
          placeholder="12 Placehold Lane, Narnia, 6000"
          mt="sm"
          {...form.getInputProps("address")}
        />
        <Select
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
          <Button type="submit" className={classes.submitBtn}>
            Send
          </Button>
        </Group>
      </form>
    </Box>
  );
};
