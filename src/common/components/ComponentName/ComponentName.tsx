import { ComponentProps } from "@/common/types";

export default function ComponentName(props: ComponentProps) {
  const { className } = props;
  return <div className={className}>Our Component</div>;
}
