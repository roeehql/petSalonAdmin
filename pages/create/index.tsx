import dynamic from "next/dynamic";
const SignUp = dynamic(() => import("@/components/auth/Signup"));

const CreateSalon = () => {
  return <SignUp />;
};

export default CreateSalon;
