"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
type Props = {
  slug: string;
  noCount?: boolean;
  showCount?: boolean;
};

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }: Props) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });

        if (error)
          console.error("Error incrementing view count in try block", error);
      } catch (error) {
        console.error("Error incrementing view count", error);
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data: views, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error)
          console.error("Error incrementing view count in try block", error);

        setViews(views?.count ?? 0);
      } catch (error) {
        console.error("Error incrementing view count", error);
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
