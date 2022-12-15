import './styles.css';

export class CardProps {
  name: string;
  time: string;
  
  constructor(name: string, time: string) {
    this.name = name;
    this.time = time
  }
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}