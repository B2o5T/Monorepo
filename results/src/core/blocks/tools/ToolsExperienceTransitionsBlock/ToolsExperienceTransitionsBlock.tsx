import React, { useMemo, useState } from 'react'
import { ToolExperienceId } from 'core/bucket_keys'
import Block from 'core/blocks/block/BlockVariant'
import {
    ToolsExperienceTransitionsBlockData,
    ApiToolExperienceTransitions,
} from './types'
import { Grid } from './Grid'
import { ToolsExperienceTransitionsChart } from './ToolsExperienceTransitionsChart'

export const ToolsExperienceTransitionsBlock = ({
    block,
    data,
}: {
    block: ToolsExperienceTransitionsBlockData
    data: ApiToolExperienceTransitions[]
}) => {
    const filteredData = useMemo(() =>
        data.filter(toolData => toolData.experienceTransitions.nodes.length > 0),
        [data]
    )

    const [currentExperience, setCurrentExperience] = useState<ToolExperienceId>('interested')

    return (
        <Block
            block={block}
            tables={[]}
            data={filteredData}
        >
            <Grid>
                {filteredData.map(toolData => {
                    return (
                        <ToolsExperienceTransitionsChart
                            key={toolData.id}
                            data={toolData}
                            currentExperience={currentExperience}
                            setCurrentExperience={setCurrentExperience}
                        />
                    )
                })}
            </Grid>
        </Block>
    )
}