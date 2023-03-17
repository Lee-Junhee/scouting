import React, { useState } from "react";
import { MatchFormInput } from "types/misc-types";
import { Container } from "../container";

export const DefenseInput: React.FC<MatchFormInput> = ({
  id,
  label,
  updateState,
}) => {
  const [teams, updateTeams] = useState<number[]>([]);

  return (
    <div>
      <Container>
        <label className="flex items-center justify-start p-2 text-lg leading-tight border rounded shadow bg-slate-200 dark:bg-zinc-900 dark:border-zinc-700 focus:outline-none focus:shadow-outline">
          Defended
        </label>
        <div className="flex">
          <input
            className="w-10/12 h-full p-2 text-lg border rounded-l dark:bg-zinc-900 dark:border-zinc-700 border-blue-lighter"
            type="number"
            id="defended"
            placeholder="Team number"
            autoComplete="off"
          />
          <button
            type="button"
            className="flex items-center justify-center px-4 text-white bg-blue-500 border-t border-b border-l rounded-r dark:border-none p bg-blue-lighter border-blue-lighter text-blue-dark"
          >
            +
          </button>
        </div>
      </Container>
    </div>
  );
};
