import z from "zod";

export const rentalCreate = z.object({
  idUser: z.string().nonempty({ message: "Enter the user ID." }),
  idProperty: z.string().nonempty({ message: "Enter the user ID." }),
  payment: z.number().positive({ message: "Enter a valid payment amount" }),
  startDate: z.date({ message: "Please enter a valid start date." }),
  endDate: z.date({ message: "Please enter a valid end date." }),
});

export const rentalReturning = z.object({
  id: z.string().nonempty({ message: "Enter the rental ID." }),
  idUser: z.string().nonempty({ message: "Enter the user ID." }),
  idProperty: z.string().nonempty({ message: "Enter the user ID." }),
  payment: z.number().positive({ message: "Enter a valid payment amount" }),
  startDate: z.date({ message: "Please enter a valid start date." }),
  endDate: z.date({ message: "Please enter a valid end date." }),
  createdAt: z.date({ message: "Please enter a valid create date." }),
});
