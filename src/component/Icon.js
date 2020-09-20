import React from "react";
import PropTypes from "prop-types";
import * as Icons from "react-feather";

//Örnek kullanım:
//<Icon name="Camera" className="my-6" />
//name her zaman büyük harfle yaz

const Icon = (props) => {
	const { name } = props;
	const IconComp = Icons[name];
	return <IconComp {...props} />;
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
};

export default Icon;
