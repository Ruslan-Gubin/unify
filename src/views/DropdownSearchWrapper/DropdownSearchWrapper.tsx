"use client";
import { useState } from "react";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { DropdownSearch } from "@/src/shared/ui/selects/dropdown/Dropdown_v2/DropdownSearch";

export const DropdownSearchWrapper = () => {
  const debounceFn = useDebounce();
  const [select, setSelect] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchItems, setSearchItems] = useState<
    { label: string; value: string }[]
  >([]);

  const options = [
    {
      value: "062e82ec-69e1-4378-be97-0c843b5231ae",
      label: "Ленина 42, кв. 5",
    },
    {
      value: "4fe64287-72a0-4e53-8422-44fb791d8bc2",
      label: "Московская 23, кв. 2",
    },
    {
      value: "6502d11d-baf9-4404-9ed0-2037120f1e91",
      label: "Советская 16, кв. 54",
    },
    {
      value: "0a5e5863-30e8-422e-aaf7-67423aa65abf",
      label: "Центральная 76, кв. 7",
    },
    {
      value: "c5f8bac1-06c0-4259-84cf-e2031809e211",
      label: "Первомайская 62, кв. 25",
    },
  ];

  const handleSelectMenu = (value: string) => {
    const findOption = options.find((el) => el.value === value);

    if (findOption) {
      setSearch(findOption.label);
      setSelect(findOption.value);
    }

    const findSearchItem = searchItems.find((el) => el.value === value);

    if (findSearchItem) {
      setSearch(findSearchItem.label);
      setSelect(findSearchItem.value);
    }
  };

  const onSearchInput = (value: string) => {
    new Promise((resolve) => {
      const allAddress: { value: string; label: string }[] = [
        {
          value: "dd854182-ba4e-4c6d-8d44-2964968a3361",
          label: "Ленина 12, кв. 205",
        },
        {
          value: "2d07b624-65bf-42c5-ba9d-acc6e178d4a1",
          label: "Ленина 15, кв. 25",
        },
        {
          value: "d56ea323-2c64-40d1-b964-1becefc625ca",
          label: "Советская 90, кв. 402",
        },
        {
          value: "a53942c8-1030-4f80-95ed-5b6527df0847",
          label: "Советская 40, кв. 40",
        },
        {
          value: "db0cd46b-14e2-4856-90b4-6350ed3142ee",
          label: "Московская 78, кв. 509",
        },
        {
          value: "19740020-c34e-4963-a08b-b463aa80d1fb",
          label: "Московская 74, кв. 501",
        },
        {
          value: "ca9d8a1c-108f-4654-ba38-7248fa584a0f",
          label: "Центральная 23, кв. 101",
        },
        {
          value: "827bba94-360d-4c5a-a1dd-f33794e65734",
          label: "Центральная 23, кв. 101",
        },
        {
          value: "539c7e0b-d8e1-4f23-bb3d-bf5a94b144e2",
          label: "Первомайская 45, кв. 307",
        },
      ];
      const findAddress: { value: string; label: string }[] = allAddress.reduce<
        { value: string; label: string }[]
      >(
        (acc, item) =>
          item.label.toLowerCase().includes(value.toLowerCase())
            ? acc.concat(item)
            : acc,
        [],
      );
      setTimeout(() => {
        resolve(findAddress);
      }, 500);
    }).then((response) => {
      setSearchItems(response as { value: string; label: string }[]);
    });
  };

  const handleChangeSearch = (value: string) => {
    setSearch(value);

    if (value.length < 3) {
      setSearchItems([]);
    }

    if (value.length >= 3) {
      debounceFn(() => onSearchInput(value));
    }
  };

  const getSearchOptions = () => {
    const filterOptions =
      searchItems.length > 0
        ? options.filter((el) =>
          el.label.toLowerCase().includes(search.toLocaleLowerCase()),
        )
        : options;

    for (let i = 0; i < searchItems.length; i++) {
      const findAddress = searchItems[i];
      if (findAddress && search.length >= 3) {
        filterOptions.push({
          label: findAddress.label,
          value: findAddress.value,
        });
      }
    }

    return filterOptions;
  };

  const searchOptions = getSearchOptions();

  return (
    <DropdownSearch
      options={searchOptions}
      value={select}
      disabled={false}
      menuHeight={200}
      placeholder="Адрес доставки*"
      onSelectMenu={handleSelectMenu}
      onChangeValue={handleChangeSearch}
      inputValue={search}
    />
  );
};
