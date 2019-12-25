import {
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  PageActions,
  TextField,
  DisplayText
} from "@shopify/polaris";
import { setItemArray } from "../redux/action";
import { connect } from "react-redux";

class ProductFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
      items: [
        {
          key: "",
          type: "",
          value: ""
        }
      ]
    };
  }

  handleChange = (key, name, value) => {
    const { items } = this.state;
    console.log(changedItems);
    const changedItems = items.map(item =>
      item.key === key ? { ...item, [name]: value } : item
    );
    this.setState({ items: changedItems }, () => {
      console.log(this.state.items);
    });
  };
  onSave = () => {
    const { dispatch } = this.props;
    const { items } = this.props;
    dispatch(setItemArray(items));
  };
  render() {
    const { items } = this.state;
    return (
      <Page
        primaryAction={{ content: "Save", disabled: true }}
        onAction={this.onSave}
      >
        <Layout>
          <Layout.header></Layout.header>
          <Layout.Section title="Define Product Fields">
            <DisplayText size="large">Define Product Fields</DisplayText>
            <Form>
              <Card sectioned>
                <FormLayout>
                  {items &&
                    items.map((item, index) => (
                      <FormLayout.Group key={index}>
                        <TextField
                          label="Key"
                          value={item.key}
                          onChange={value =>
                            this.handleChange(item.key, "key", value)
                          }
                        />
                        <TextField
                          label="Type"
                          value={item.type}
                          onChange={value =>
                            this.handleChange(item.key, "type", value)
                          }
                        />
                        <TextField
                          label="Value"
                          value={item.value}
                          onChange={value =>
                            this.handleChange(item.key, "value", value)
                          }
                        />
                      </FormLayout.Group>
                    ))}
                </FormLayout>
              </Card>
            </Form>
          </Layout.Section>
          <Layout.Section>
            <PageActions
              primaryAction={{
                content: "Create Field",
                onAction: () => {
                  this.setState({
                    items: [
                      ...items,
                      {
                        key: "",
                        type: "",
                        value: ""
                      }
                    ]
                  });
                }
              }}
            />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  const { items } = state;
  return {
    items
  };
}

export default connect(mapStateToProps)(ProductFields);
