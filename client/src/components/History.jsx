import peaceRoomPlan from "../assets/peaceRoomPlan.png";
import peaceRoomSketch from "../assets/peaceRoomSketch.png"

function History() {
  return (
    <div className="grid grid-cols-2 h-full p-4">
      <div className="col-span-2 flex justify-center items-center">
        <h1 className="font-Zeyada text-3xl underline decoration-sky-600">
          The History of the peace room
        </h1>
      </div>
      <div className="col-start-1 p-8">
        <p className="text-lg">
          The Peace Room was created by Mrs Bidwell in South Africa. Her parents
          had moved there from England for health reasons, and she had grown up
          there. By the 1940s she was a grandmother, and was concerned for her
          grandchildren, growing up in a time of war. Although South Africa was
          relatively uninvolved, her English heritage probably made her more
          aware of what was going on in so much of the world and she wanted to
          instil a desire for peace and the ability to negotiate collaboration
          rather than using force into her grandchildren.
        </p>
      </div>
      <div className="col-start-1 p-8 flex jusify-center items-center gap-2">
        <p className="text-lg">
          She decided to build some “playrooms” for her grandchildren in the
          grounds of her house. She decided on three rooms: a work room, with a
          half-sized cooker, a museum for displaying interesting items they
          collected, and a Peace Room. In the Peace Room there was a window seat
          curved around the bay window, a table and chair with a gavel in the
          centre of the room, and on the far wall, a bookshelf. Although they
          were for children, they were big enough for adults to enter, if
          slightly crouched, and join in.
        </p>
        <img src={peaceRoomPlan} />
      </div>
      <div className="col-start-1 p-8">
        <p className="text-lg">
          The idea of the Peace Room was that the children would have meetings.
          One child would be elected “chair person” and would preside over the
          meeting. The others would sit around the edge and would nominate
          people who they felt had “made a difference” to the world: those who
          had somehow made the world a better place. After discussion there
          would be a vote, and those people elected would be placed on the
          bookshelf. A devoted grandmother and grandfather turned the children’s
          “heroes” into real little books, each of which was a biography
          explaining a bit about the person and what they had done which gave
          them a place in the Peace Room. The children could then read these at
          their leisure. Mrs Bidwell also wrote a Peace Song which was painted
          high onto the wall of the Peace Room. Sometimes Mrs Bidwell would
          challenge the children by nominating someone like Adolf Hitler and
          defending his right to be placed in the Peace Room. The children would
          have to argue with reason as to why or why not he should be allowed
          in.
        </p>
      </div>
      <div className="col-start-2 row-start-2 p-8 flex jusify-center items-center gap-2">
        <p className="text-lg">
          However, the room did not just influence Mrs Bidwell’s grand children.
          News of the Peace Room travelled, and famous people would visit. Marda
          Vanne, a South African actress visited and made a significant decision
          there. Paul Fischer in university in Philadelphia in America heard of
          it and wrote to Mrs Bidwell. Someone at the International Peace
          Congress in Vienna in 1952 who had heard of the Peace Room wrote and
          said that her dreams were beginning to take shape.
        </p>
        <img src={peaceRoomSketch} />
      </div>
      <div className="col-start-2 row-start-3 p-8">
        <p className="text-lg">
          Sadly, in the 1960s, with the troubles in South Africa, the Peace Room
          was left in disrepair, but it is still there, a monument to an
          inspirational woman, and an idea that should not lie forgotten. It is
          now time for someone else to “build on the steps built by others”
          (Peace Room Minutes).
        </p>
      </div>
      <div className="col-start-2 row-start-4 p-8">
        <p className="text-lg">
          World Peace is a vision which may never be realised, but is always
          something worth working towards. With the development of the Internet,
          the floor for communication has expanded exponentially and now at last
          there is a medium where small visions can become world wide over
          night. This Virtual Peace Room allows children from all over the world
          to nominate those who they feel have made a difference and
          “contributed to the world” in some way. It could be simply by bringing
          hope to a neighbour in despair or starting a community garden. It
          could be someone famous, or someone unknown. The idea is to get
          children to think about the interaction of local and global issues,
          and local and global answers.
        </p>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <p className="text-lg">
          So here it is. With many thanks to MirandaNet and all those who are
          turning this local dream into a worldwide reality
        </p>
      </div>
    </div>
  );
}

export default History;