import { useParams } from "next/navigation";

export default function ReviewDetail() {
  const params = useParams();
  const { productId, reviewId } = params;

  return (
    <div>
      <h1>Product Review</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
}
