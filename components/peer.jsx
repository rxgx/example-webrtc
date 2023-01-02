import styles from './peer.module.css'

export default function Peer (props) {
    const { text = 'XX' } = props;
    return (
        <div className={styles.root}>
            <div>{text}</div>
        </div>
    );
}
