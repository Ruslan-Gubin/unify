"use client";
import { useState } from "react";
import { AvatarInputIcon } from "@/src/shared/svg/AvatarInputIcon/AvatarInputIcon";
import { CancelInputIcon } from "@/src/shared/svg/CancelInputIcon/CancelInputIcon";
import { EyeIcon } from "@/src/shared/svg/EyeIcon/EyeIcon";
import { SearchIcon } from "@/src/shared/svg/SearchIcon/SearchIcon";
import { Input } from "@/src/shared/ui/inputs/Input_v1/Input";

export const InputWrapper = () => {
  const [search, setSearch] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  return (
    <ul style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}>
      <li>
        <Input
          label="Standard lg"
          name="Standard lg"
          variant="standard"
          variantSize="lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<SearchIcon />}
          rightIcon={search.length > 0 ? <CancelInputIcon /> : null}
          onClickRightIcon={() => setSearch("")}
        />
      </li>
      <li>
        <Input
          leftIcon={<AvatarInputIcon />}
          label="Select password"
          name="Standard md"
          variantSize="md"
          value={search}
          type={show ? "text" : "password"}
          onChange={(e) => setSearch(e.target.value)}
          rightIcon={<EyeIcon />}
          onClickRightIcon={() => setShow((prev) => !prev)}
        />
      </li>
      <li>
        <Input
          label="Standard sm"
          name="Standard sm"
          variantSize="sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>
        <Input
          label="Standard xs"
          name="Standard xs"
          variantSize="xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>
        <Input
          label="Outlined lg"
          name="Outlined lg"
          leftIcon={<SearchIcon />}
          variant="outlined"
          variantSize="lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          rightIcon={search.length > 0 ? <CancelInputIcon /> : null}
          onClickRightIcon={() => setSearch("")}
        />
      </li>
      <li>
        <Input
          error={"Error"}
          label="Outlined md"
          name="Outlined md"
          variant="outlined"
          variantSize="md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>
        <Input
          label="Outlined sm"
          name="Outlined sm"
          variant="outlined"
          variantSize="sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>
        <Input
          label="Outlined xs"
          name="Outlined xs"
          error={"Failed valid password"}
          variant="outlined"
          variantSize="xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>
        <Input
          label="Filled lg"
          name="filled lg"
          leftIcon={<SearchIcon />}
          error={"Failed valid password"}
          variant="filled"
          variantSize="lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          rightIcon={search.length > 0 ? <CancelInputIcon /> : null}
          onClickRightIcon={() => setSearch("")}
        />
      </li>
      <li>
        <Input
          label="Filled md"
          name="filled md"
          variant="filled"
          variantSize="md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>
        <Input
          label="Filled sm"
          name="filled sm"
          variant="filled"
          variantSize="sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
      <li>
        <Input
          label="Filled xs"
          name="filled xs"
          variant="filled"
          variantSize="xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </li>
    </ul>
  );
};
