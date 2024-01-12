"use client";
import { useState } from "react";
import CountriesTable from "@/components/CountriesTable";
import { Loader } from "@/components/Loader";
import SearchBar from "@/components/SearchBar";
import { useCountries } from "@/hooks/useCountries";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState<string>("");

  const { getCountries, error, data, isLoading } = useCountries({ name });

  return (
    <main className={styles.main}>
      <SearchBar
        onSearch={getCountries}
        onValueChange={(newName) => setName(newName)}
        value={name}
      />
      {isLoading ? (
        <Loader />
      ) : data ? (
        <CountriesTable data={data} />
      ) : (
        error && (
          <pre className={styles.errorText}>No se encontraron resultados</pre>
        )
      )}
    </main>
  );
}
