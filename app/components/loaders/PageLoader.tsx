import './styles/pageLoader.css';

type Props = {
  textContent?: string;
};

export default function PageLoader({ textContent = 'Loading...' }: Props) {
  return <div className="page_loader">{textContent}</div>;
}
