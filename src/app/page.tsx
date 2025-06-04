import { ButtonGroup } from "@/components/button";

export default function Home() {
  return (
    <div className="flex justify-center mt-8">
      <ButtonGroup showEnviar={true} showVoltar={false} />
    </div>
  );
}
