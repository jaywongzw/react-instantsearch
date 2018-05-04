import PropTypes from 'prop-types';

export const registerEvents = (events, props, instance) => {
  const eventsAvailable = Object.keys(events);
  const listeners = Object.keys(props)
    .filter(key => eventsAvailable.indexOf(key) !== -1)
    .map(name => instance.addListener(events[name], props[name]));

  return () => {
    listeners.forEach(listener => listener.remove());
  };
};

export const createListenersPropType = eventTypes =>
  Object.keys(eventTypes).reduce(
    (acc, name) => ({ ...acc, [name]: PropTypes.func }),
    {}
  );
