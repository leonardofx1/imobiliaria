

  export const errorMapDrizzle = (codeError:string)=> ( {
    "22P02": { status: 400, message: "Invalid input syntax for type" },
    "23502": { status: 400, message: "Missing required field (NOT NULL violation)" },
    "23503": { status: 400, message: "Invalid reference (foreign key violation)" },
    "23505": { status: 409, message: "Duplicate value (unique constraint violation)" },}[codeError])
  

