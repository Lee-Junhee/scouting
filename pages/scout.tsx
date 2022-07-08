import type { NextPage } from "next";
import { Protected } from "../components/auth/protected";
import { Container } from "../components/ui/container";
import { Input } from "../components/ui/input";

const Scout: NextPage = () => {
  return (
    <Protected>
      <div className="flex items-start justify-center h-screen p-4">
        <form>
          <Container>
            <select
              id="matchType"
              className="p-2 text-lg leading-tight border rounded shadow focus:outline-none focus:shadow-outline"
            >
              <option>Qualification</option>
              <option>Quarterfinal</option>
              <option>Semifinal</option>
              <option>Final</option>
            </select>
            <Input id="matchNumber" placeholder="Match number" />
          </Container>
          <Container>
            
          </Container>
        </form>
      </div>
    </Protected>
  );
};

export default Scout;
