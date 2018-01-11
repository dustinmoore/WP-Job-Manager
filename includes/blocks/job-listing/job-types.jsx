/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { ToggleControl } = wp.blocks.InspectorControls;
const { PanelBody } = wp.components;
const { Component } = wp.element;

class JobTypes extends Component {
	render() {
		const {
			attributes,
			onChange,
		} = this.props;
		const {
			freelance,
			fullTime,
			internship,
			partTime,
			temporary,
		} = attributes;

		/* TODO: Dynamically create checkboxes. Also, instead of toggles, these may
		need to be RadioControls depending on the "Multi-select Listing Types"
		setting. */
		return (
			<PanelBody title={ __( 'Job Type(s)' ) }>
				<ToggleControl
					checked={ !! freelance }
					label={ __( 'Freelance' ) }
					onChange={ onChange( 'freelance' ) } />
				<ToggleControl
					checked={ !! fullTime }
					label={ __( 'Full Time' ) }
					onChange={ onChange( 'fullTime' ) } />
				<ToggleControl
					checked={ !! internship }
					label={ __( 'Internship' ) }
					onChange={ onChange( 'internship' ) } />
				<ToggleControl
					checked={ !! partTime }
					label={ __( 'Part Time' ) }
					onChange={ onChange( 'partTime' ) } />
				<ToggleControl
					checked={ !! temporary }
					label={ __( 'Temporary' ) }
					onChange={ onChange( 'temporary' ) } />
			</PanelBody>
		);
	}
}

export default JobTypes;
