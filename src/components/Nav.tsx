

export interface Anchors {
    id: number;
    text: string;
    scroll: string;
}

interface Nav {
    anchors: Anchors[];
}

export default function Nav({anchors}: Nav) {

    const scrollToElement = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
    
    return (
        <nav>
            {anchors.map((anchor) => (
                <a key={anchor.id} onClick={(event) => {event.preventDefault(); scrollToElement(anchor.scroll);}}>{anchor.text}</a>
            ))}
        </nav>
    )
}