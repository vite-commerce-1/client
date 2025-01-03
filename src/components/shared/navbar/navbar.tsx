import Container from "@/components/atoms/container";
import Logo from "@/components/atoms/logo";
import SearchInput from "./search-input";
import ProfileDropdown from "@/components/molecules/profile-dropdown";

const Navbar = () => {
  return (
    <nav className="bg-secondary border-b-2 border-border fixed top-0 z-50 w-full left-0 right-0">
      <Container className="grid grid-cols-[auto_auto_auto] md:grid-cols-[auto_auto_auto] items-center gap-4 py-4">
        <Logo className="justify-self-start" />

        <SearchInput className="justify-self-center w-full" />

        <ProfileDropdown className="justify-self-end" />
      </Container>
    </nav>
  );
};

export default Navbar;
