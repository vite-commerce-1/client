import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";
import { cn } from "@/lib/utils";

interface IProps {
  image: string;
  className?: string;
}
const ProfileImage = ({ image, className }: IProps) => {
  if (!image) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="w-fit">
            <figure
              className={cn(
                "max-w-[200px] rounded-full overflow-hidden aspect-square",
                className
              )}
            >
              <img src="https://placehold.co/400" alt="" />
            </figure>
          </TooltipTrigger>
          <TooltipContent className="bg-destructive">
            <p className="max-w-[200px] text-wrap">
              You don&apos;t have an profile image, please click button edit
              profile to upload your profile image
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
