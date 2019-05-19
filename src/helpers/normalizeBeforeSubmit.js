export default handleSubmit => {
    return fields => {
        let normalized = {};

        Object.keys(fields).map(f =>
            normalized[f] = typeof fields[f] === 'string' || fields[f] instanceof String ? fields[f].trim() : fields[f]
        );

        handleSubmit(normalized);
    }
}
