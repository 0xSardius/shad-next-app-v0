import React from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 2) {
    return (
      <div>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  } else if (params.slug.length === 1) {
    return <div>Docs for feature {params.slug[0]}</div>;
  }
  return <div>Docs home page</div>;
}
