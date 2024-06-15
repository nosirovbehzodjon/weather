"use server";

import { Button, TextField } from "@mui/material";
import { redirect } from "next/navigation";

async function handelSubmit(data: FormData) {
  "use server";
  const name = data.get("country") as string;

  if (name.length === 0) {
    return;
  }

  redirect("/information/" + name);
}

export const SearchSection = () => {
  return (
    <form
      style={{
        width: "100%",
      }}
      action={handelSubmit}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <TextField
          id="standard-basic"
          type="text"
          name="country"
          color="secondary"
          size="small"
          style={{ width: "100%" }}
          label="Country name"
          variant="standard"
        />
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="submit"
            variant="outlined"
            className="mt-3"
            size="medium"
            color="secondary"
          >
            search
          </Button>
        </div>
      </div>
    </form>
  );
};
