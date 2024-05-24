import React from "react";
import { CustomInput, CustomSelect } from "../CustomInput";
import { useTranslation } from "react-i18next";
import { countries, Country } from "countries-list";
type CustomCountry = {
  label: string;
  value: string;
};
const AddressInfoForm = ({ formik }: any) => {
  const { t } = useTranslation();
  const countryData: Record<string, Country> = countries;
  const EmptyPaysAdresseOption: CustomCountry = {
    label: t("Pays"),
    value: "none",
  };
  const excludedCountryCodes = ["IL"];
  const paysAdresseOptions: CustomCountry[] = Object.keys(countryData)
    .filter((countryCode) => !excludedCountryCodes.includes(countryCode))
    .map((countryCode) => ({
      label: t(countryData[countryCode].name),
      value: countryCode,
    }));

  paysAdresseOptions.unshift(EmptyPaysAdresseOption);

  const govAdresseOptions = [
    {
      label: t("Gouvernorat"),
      value: "none",
    },
    {
      label: t("Tunis"),
      value: "tunis",
    },
    {
      label: t("Ariana"),
      value: "ariana",
    },
    {
      label: t("Ben Arous"),
      value: "ben_arous",
    },
    {
      label: t("Manouba"),
      value: "manouba",
    },
    {
      label: t("Nabeul"),
      value: "nabeul",
    },
    {
      label: t("Zaghouan"),
      value: "zaghouan",
    },
    {
      label: t("Bizerte"),
      value: "bizerte",
    },
    {
      label: t("Béja"),
      value: "beja",
    },
    {
      label: t("Jendouba"),
      value: "jendouba",
    },
    {
      label: t("Le Kef"),
      value: "kef",
    },
    {
      label: t("Siliana"),
      value: "siliana",
    },
    {
      label: t("Kairouan"),
      value: "kairouan",
    },
    {
      label: t("Kasserine"),
      value: "kasserine",
    },
    {
      label: t("Sidi Bouzid"),
      value: "sidi_bouzid",
    },
    {
      label: t("Sousse"),
      value: "sousse",
    },
    {
      label: t("Mahdia"),
      value: "mahdia",
    },
    {
      label: t("Monastir"),
      value: "monastir",
    },
    {
      label: t("Sfax"),
      value: "sfax",
    },
    {
      label: t("Gafsa"),
      value: "gafsa",
    },
    {
      label: t("Tozeur"),
      value: "tozeur",
    },
    {
      label: t("Kebili"),
      value: "kebili",
    },
    {
      label: t("Tataouine"),
      value: "tataouine",
    },
    {
      label: t("Medenine"),
      value: "medenine",
    },
    {
      label: t("Gabès"),
      value: "gabes",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className="text-start font-semibold text-lg">{t("Adresse")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4">
        <CustomInput
          type="text"
          placeholder={t("N° Rue")}
          name="rue"
          value={formik.values.rue}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Ville")}
          name="ville"
          value={formik.values.ville}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="number"
          placeholder={t("Code postal")}
          name="codePostal"
          value={formik.values.codePostal}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={govAdresseOptions}
          name="gouvernoratAdresse"
          value={formik.values.gouvernoratAdresse}
          onChange={formik.handleChange}
        />
        <CustomSelect
          options={paysAdresseOptions}
          name="paysAdresse"
          value={formik.values.paysAdresse}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="tel"
          placeholder={t("Téléphone")}
          name="telephone"
          value={formik.values.telephone}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="email"
          placeholder={t("Contact Email")}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Profession")}
          name="profession"
          value={formik.values.profession}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="text"
          placeholder={t("Etablissement")}
          name="etablissement"
          value={formik.values.etablissement}
          onChange={formik.handleChange}
        />
      </div>
    </div>
  );
};

export default AddressInfoForm;
