import '../Styles/Main.scss';

export function MotoCard({ moto }) {
    const imageMoto = moto.content
    return (
        <li>
            <div>
                <img src={imageMoto} alt={moto.name} />
            </div>
            <div>
                {moto.name}
            </div>
        </li>
    )
}