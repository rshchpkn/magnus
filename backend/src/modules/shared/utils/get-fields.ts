export function getFields(messages, parentProperty?) {
  return messages.reduce((fieldsArray, message) => {
    const currentPropertyName = parentProperty
      ? `${parentProperty}.${message.property}`
      : message.property;

    let childrenFields = [];
    if (message.children.length) {
      childrenFields = getFields(message.children, currentPropertyName);
    }

    const currentField = message.constraints
      ? [{ [currentPropertyName]: Object.values(message.constraints) }]
      : [];
    return [...currentField, ...fieldsArray, ...childrenFields];
  }, []);
}
