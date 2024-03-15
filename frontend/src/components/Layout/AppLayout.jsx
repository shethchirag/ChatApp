const AppLayout = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    return (
      <div>
        <div>header</div>
        <WrappedComponent {...props} />
        <div>footer</div>
      </div>
    );
  };
};

export default AppLayout;
