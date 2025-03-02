"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchSchema = z.object({
  search: z.string().min(2).max(35),
});

const Searchbar = () => {
  const { register, handleSubmit } = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });
  const router = useRouter();

  const submitHandler = (values: z.infer<typeof searchSchema>) => {
    router.push(`/search/${values.search}`);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center gap-2 px-4 py-6 mt-4 md:mt-0"
    >
      <SearchIcon className="text-gray-400" />
      <input
        type="text"
        id=""
        className="bg-transparent text-gray-200 outline-none border-none flex-1 placeholder:text-gray-400/80"
        placeholder="Search for movies or tv series"
        {...register("search")}
      />
    </form>
  );
};

export default Searchbar;
