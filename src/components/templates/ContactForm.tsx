import React, { useState } from "react";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { TextInput, Button, Box, Group, Textarea, Title } from "@mantine/core";
import { contactStyles } from "../../styles/Contact";

interface FormValues {
  name: string; // regular field, same as inferred type
  email: string; // union, more specific than inferred type (string)
  message: string; // values that may be undefined cannot be inferred
}

const schema = z.object({
  name: z.string().min(2, { message: "A name should have at least 1 letter" }),
  email: z.string().email({ message: "Invalid email address" }),
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
      message: "",
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
        Send an enquiry.
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
        {/* checkbox or multiple select, or dropdown for email subject role */}
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
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};
