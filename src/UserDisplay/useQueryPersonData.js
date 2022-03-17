import { useEffect, useState } from "react";
import { getAge } from "./queries/getAge";
import { getGender } from "./queries/getGender";
import { getNationality } from "./queries/getNationality";

export const useQueryPersonData = (name) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    age: "",
    gender: "",
    nationalities: [],
  });
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  useEffect(() => {
    setLoading(true);
    Promise.all([
      getAge(name).then((res) => res.age),
      getGender(name).then((res) => res.gender),
      getNationality(name)
        .then((res) => res.country)
        .then((countries) =>
          countries.map((c) => regionNames.of(c.country_id))
        ),
    ])
      .then(([age, gender, nationalities]) => {
        setUserData({ age, gender, nationalities });
      })
      .finally(() => setLoading(false));
  }, []);

  return { ...userData, loading };
};
