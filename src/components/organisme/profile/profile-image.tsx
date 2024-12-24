import { cn } from "@/lib/utils";

interface IProps {
  image: string;
  className?: string;
}
const ProfileImage = ({ image, className }: IProps) => {
  if (!image) {
    return (
      <figure className={cn("", className)}>
        <img
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "max-w-[200px] rounded-full overflow-hidden aspect-square",
        className
      )}
    >
      <img src={image} alt="profile_image" />
    </figure>
  );
};

export default ProfileImage;
