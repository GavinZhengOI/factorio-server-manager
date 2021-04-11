import React from "react";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Label from "../../../components/Label";
import copy from "../../../copy";

const Enemy = ({settings, setSettings}) => {
    return <div className="flex-1">
        <div className="border border-black rounded p-2 mb-1">
            <table className="w-full">
                <thead>
                <tr>
                    <th className="w-3/5"/>
                    <th className="w-1/5">Frequency</th>
                    <th className="w-1/5">Size</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Checkbox text="Enemy bases"
                                  checked={settings?.autoplace_controls?.['enemy-base'].richness || true}
                                  onChange={event => {
                                      let tmp = copy(settings);
                                      tmp.autoplace_controls['enemy-base'].richness = event.target.checked ? 1 : 0;
                                      setSettings(tmp);
                                  }}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            value={settings?.autoplace_controls?.['enemy-base']?.frequency || 1}
                            disabled={!(settings?.autoplace_controls?.['enemy-base'].richness)}
                            onChange={event => {
                                let tmp = copy(settings);
                                tmp.autoplace_controls['enemy-base'].frequency = parseInt(event.target.value);
                                setSettings(tmp);
                            }}
                        />
                    </td>
                    <td className="text-center">
                        <Input
                            value={settings?.autoplace_controls?.['enemy-base']?.size || 1}
                            disabled={!(settings?.autoplace_controls?.['enemy-base'].richness)}
                            onChange={event => {
                                let tmp = copy(settings);
                                tmp.autoplace_controls['enemy-base'].size = parseInt(event.target.value);
                                setSettings(tmp);
                            }}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="border border-black rounded p-2 mb-1">
            <Checkbox checked={false} text="Peaceful mode"/>
        </div>
        <div className="flex justify-between border border-black rounded p-2 mb-1">
            <div className="self-center">
                <Label text="Starting area size"/>
            </div>
            <Input isInline
                value={settings?.starting_area || 1}
                   onChange={event => {
                       let tmp = copy(settings);
                       tmp.starting_area = parseInt(event.target.value);
                       setSettings(tmp);
                   }}
            />
        </div>
        <div className="border border-black rounded p-2 mb-1">
            <table className="w-full">
                <thead>
                <tr className="text-left">
                    <th colSpan={2}>
                        <Checkbox text="Enemy expansion" className="text-dirty-white" textSize="md"
                                  checked={settings?.enemy_expansion?.enabled || true}
                                  onChange={event => {
                                      let tmp = copy(settings)
                                      tmp.enemy_expansion.enabled = event.target.checked;
                                      setSettings(tmp)
                                  }}
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Label text="Maximum expansion size"/>
                    </td>
                    <td className="text-right">
                        <Input isInline disabled={!settings?.enemy_expansion?.enabled}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Label text="Minimum group size"/>
                    </td>
                    <td className="text-right">
                        <Input isInline disabled={!settings?.enemy_expansion?.enabled}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Label text="Maximum group size"/>
                    </td>
                    <td className="text-right">
                        <Input isInline disabled={!settings?.enemy_expansion?.enabled}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Label text="Minimum cooldown"/>
                    </td>
                    <td className="text-right">
                        <Input isInline disabled={!settings?.enemy_expansion?.enabled}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Label text="Maximum cooldown"/>
                    </td>
                    <td className="text-right">
                        <Input isInline disabled={!settings?.enemy_expansion?.enabled}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="border border-black rounded p-2">
            <table className="w-full">
                <thead>
                <tr className="text-left">
                    <th colSpan={2}>
                        <Checkbox text="Evolution" className="text-dirty-white" textSize="md"
                                  checked={settings?.enemy_evolution?.enabled || true}
                                  onChange={event => {
                                      let tmp = copy(settings)
                                      tmp.enemy_evolution.enabled = event.target.checked;
                                      setSettings(tmp)
                                  }}
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Label text="Time factor"/>
                    </td>
                    <td className="text-right">
                        <Input isInline
                               disabled={!settings?.enemy_evolution?.enabled}
                               value={settings?.enemy_evolution?.time_factor}
                               onChange={event => {
                                   let tmp = copy(settings)
                                   tmp.enemy_evolution.time_factor = event.target.value;
                                   setSettings(tmp)
                               }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Label text="Destroy factor"/>
                    </td>
                    <td className="text-right">
                        <Input isInline
                               disabled={!settings?.enemy_evolution?.enabled}
                               value={settings?.enemy_evolution?.destroy_factor}
                               onChange={event => {
                                   let tmp = copy(settings)
                                   tmp.enemy_evolution.destroy_factor = event.target.value;
                                   setSettings(tmp)
                               }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Label text="Pollution factor"/>
                    </td>
                    <td className="text-right">
                        <Input isInline
                               disabled={!settings?.enemy_evolution?.enabled}
                               value={settings?.enemy_evolution?.pollution_factor}
                               onChange={event => {
                                   let tmp = copy(settings)
                                   tmp.enemy_evolution.pollution_factor = event.target.value;
                                   setSettings(tmp)
                               }}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default Enemy;